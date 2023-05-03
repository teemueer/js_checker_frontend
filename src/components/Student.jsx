import { useEffect, useState } from "react";
import studentService from "../services/student";
import assignmentService from "../services/assignments";
import { useMatch, useOutlet } from "react-router-dom";
import LoadingAnim from "./studentComponents/loadingAnim";
import { useTranslation } from "react-i18next";

const Student = () => {
  const [t, i18n] = useTranslation("common");

  const [url, setURL] = useState();
  const [assg, setAssg] = useState();
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showres, setshowres] = useState(false);

  const match = useMatch("/student/:id");
  const assignmentId = match.params.id;

  useEffect(() => {
    studentService
      .getById(assignmentId)
      .then((assignment) => setAssg(assignment));
  }, []);

  const onUrlChange = (url) => {
    setURL(url);
  };

  const onEvaluate = async () => {
    console.log("onEvaluate");
    if (!studentService.isValidUrl(url)) {
      alert("No URL set.");
    } else {
      setRes(null);
      setLoading(true);
      const res = await studentService.evaluateAssg(assg._id, url);
      setRes(res);
      setLoading(false);
      setshowres(!showres);
    }
  };

  return (
    <>
      {assg && (
        <>
          <div className="flex items-center justify-center h-screen w-screen  bg-gray-100">
            <div className="px-8 py-6 mt-4 bg-white shadow-lg  w-[608px] min-h-[500px] max-h-[700px] flex flex-col items-center rounded">
              <h1 className="font-bold text-center text-2xl">
                HTML & JS Checker
              </h1>
              <div className="my-2 mb-1 h-0.5 w-3/5 border-2 border-blue-500"></div>

              <div className=" flex flex-col w-3/5  py-2 mb-5 items-left min-h-[100px] min-w-[364px]">
                <h2 className="self-center font-bold text-xl">
                  {assg.course.name}
                </h2>
                <div className="mt-5 flex flex-row justify-around">
                  <p>
                    {t("student.assignment")}: {assg.name}
                  </p>
                  <p>
                    {t("student.points")}: {assg.points}
                  </p>
                </div>
                <div className="mb-1 mt-5 max-h-[120px] overflow-y-scroll">
                  <p>{assg.description}</p>
                </div>
              </div>

              <div className=" flex flex-col w-3/5 items-center">
                {!showres && !loading && (
                  <>
                    <p className="mb-3 px-1">{t("student.url")}:</p>
                    <input
                      type="text"
                      className=" w-full bg-grray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="https://users.metropolia.fi/"
                      value={url}
                      onChange={(event) => onUrlChange(event.target.value)}
                    />
                    <button
                      type="button"
                      className="mt-5 border-blue-500 inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      onClick={() => onEvaluate()}
                    >
                      {t("student.evaluate")}
                    </button>
                  </>
                )}
                {loading && <LoadingAnim />}
                {showres && (
                  <>
                    <div className="">
                      {res.length != 0 && (
                        <>
                          {res.map((item, index) => (
                            <>
                              <div className="flex flex-row" key={index}>
                                <p>{item.description}: </p>
                                <p className="ml-2 text-bold text-red-500">
                                  {item.result}
                                </p>
                              </div>
                            </>
                          ))}
                        </>
                      )}
                      {res.length == 0 && (
                        <>
                          <p className="text-green-500 text-bold text-2xl">
                            PASS! 😊👍
                          </p>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      className="mt-5 border-blue-500 inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      onClick={() => setshowres(false)}
                    >
                      Ok
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Student;
