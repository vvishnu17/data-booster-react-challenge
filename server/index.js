import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
import ReactPlayer from "react-player/vimeo.js";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const lessons = [
  {
    id: "465ad295-51be-4743-b879-96fc3ab3d388",
    exercises: [
      {
        id: "af63d9eb-1cbf-44fa-ab37-942fae2d8eaf",
        course_id: "9ebcf921-5c9d-4048-8c6f-033888e5c005",
        next_exercise_id: "596cf202-bd6c-4623-9482-be95f76a4837",
        previous_exercise_id: null,
        is_completed: false,
        title: "The BADIR framework",
        order: 0,
        url: "https://player.vimeo.com/video/823111497?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        lesson: "465ad295-51be-4743-b879-96fc3ab3d388",
        resourcetype: "VideoExercise"
      },
      {
        id: "596cf202-bd6c-4623-9482-be95f76a4837",
        course_id: "9ebcf921-5c9d-4048-8c6f-033888e5c005",
        next_exercise_id: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
        previous_exercise_id: "af63d9eb-1cbf-44fa-ab37-942fae2d8eaf",
        is_completed: false,
        answers: [
          {
            id: "7dc54c0b-7be9-451e-b3e5-5ea944179904",
            answer: "Business question, Analysis plan, Data collection, Insights, Recommendations",
            exercise: "596cf202-bd6c-4623-9482-be95f76a4837",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "e15a2a78-0d7d-4a51-b714-e092aa4fa251",
            answer: "Business problem, Analysis, Data collection, Ingestion, Recommendations",
            exercise: "596cf202-bd6c-4623-9482-be95f76a4837",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "2947a423-0b24-4ea1-96f9-6427fb661902",
            answer: "Business data, Analysis insights, Review plan",
            exercise: "596cf202-bd6c-4623-9482-be95f76a4837",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "196147aa-4455-4863-9f58-17b113971bda",
            answer: "Business question, Data integration, Recommendations",
            exercise: "596cf202-bd6c-4623-9482-be95f76a4837",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          }
        ],
        title: "BADIR framework basics",
        order: 1,
        description: "<p><span>What does BADIR stand for?</span></p>",
        hint: "<p><span>There are 5 components and the first is the business question</span></p>",
        lesson: "465ad295-51be-4743-b879-96fc3ab3d388",
        resourcetype: "MultipleChoiceExercise"
      },
      {
        id: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
        course_id: "9ebcf921-5c9d-4048-8c6f-033888e5c005",
        next_exercise_id: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
        previous_exercise_id: "596cf202-bd6c-4623-9482-be95f76a4837",
        is_completed: false,
        answers: [
          {
            id: "d26f0c53-a180-423c-9db2-1293ab6497cf",
            answer: "To gather as much data for analysis as possible",
            exercise: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "6e375d51-e673-4e42-bbd6-9871a35157ac",
            answer: "To ensure the analysis is focused and aligned with business objectives",
            exercise: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "fee6f1f3-b20b-4213-bfc2-140fd07344f1",
            answer: "To ensure compliance with regulations",
            exercise: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "c3271bb6-74db-4078-a516-0fb9426db1d0",
            answer: "To speed up analysis",
            exercise: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          }
        ],
        title: "The importance of Business Questions",
        order: 2,
        description: '<p><span>Why is it important to start with a clear business question in the BADIR framework?</span></p>\r\n\r\n<p><img src="https://media-files20240727134039506700000001.s3.amazonaws.com/2024/08/15/image.png" style="height:402px; width:350px" /></p>',
        hint: "<p><span>We want to deliver impactful recommendations to the business goals this we need to understand the deeper questions to align</span></p>",
        lesson: "465ad295-51be-4743-b879-96fc3ab3d388",
        resourcetype: "MultipleChoiceExercise"
      },
      {
        id: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
        course_id: "9ebcf921-5c9d-4048-8c6f-033888e5c005",
        next_exercise_id: "40489080-5bdc-497b-8068-1974db3405ec",
        previous_exercise_id: "c5783abf-f5fd-4367-b7ca-89801dca5ff5",
        is_completed: false,
        answers: [
          {
            id: "e5f53189-391b-45ae-bd12-b56e11571d37",
            answer: "By conducting a broad exploratory analysis of all review data without a specific focus",
            exercise: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "93e4d586-428a-4cec-b96d-9bad800354b6",
            answer: "By only analyzing data from the final stage of the process",
            exercise: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "25468a32-5e65-4fec-bc40-20debf32a145",
            answer: "By using only historical data without considering recent changes in the process",
            exercise: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          },
          {
            id: "e71b2ad6-da93-4b2c-ad70-cea2311370ae",
            answer: "By asking questions to determine the stages in the process which leads to developing an analysis plan, then collecting data on each stage, followed by targeted analysis to identify error patterns.",
            exercise: "91388a61-6baf-413e-a9fd-bd18c6e90ef6",
            resourcetype: "MultipleChoiceExerciseAnswerText"
          }
        ],
        title: "Applying BADIR",
        order: 3,
        description: "<p><span>How can the BADIR framework be applied to identify the stage at which errors in an internal process occur at ING, and what steps should be included in the analysis plan?</span></p>",
        hint: "<p><span>Consider the need for specific questions, data collection, and focused analysis methods.</span></p>",
        lesson: "465ad295-51be-4743-b879-96fc3ab3d388",
        resourcetype: "MultipleChoiceExercise"
      }
    ],
    title: "The BADIR Framework",
    order: 0,
    chapter: "7a466ad5-c7b0-4bf3-9dc2-79fc61851607"
  }
];
const lessonsdata = {
  lessons
};
const VideoExercise = ({ exercise }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    ReactPlayer,
    {
      url: exercise.url,
      controls: true,
      width: "90%",
      height: "100%",
      className: "videoplayer"
    }
  ) });
};
function QuizExercise({ exercise }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const getQuestion = (htmlstring) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlstring;
    return tempElement.textContent || tempElement.innerText || "";
  };
  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId(answerId);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "question", children: getQuestion(exercise.description) }),
    /* @__PURE__ */ jsxs("ul", { className: "answers", children: [
      /* @__PURE__ */ jsx("li", { className: "pickOption", children: "Pick one option" }),
      exercise.answers.map((answer) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: `answer ${selectedAnswerId === answer.id ? "selected" : ""}`,
          onClick: () => handleAnswerClick(answer.id),
          role: "button",
          children: [
            /* @__PURE__ */ jsx("div", { className: `ellipse ${selectedAnswerId === answer.id ? "checked" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: "option", children: answer.answer })
          ]
        },
        answer.id
      ))
    ] })
  ] });
}
function CourseLessons() {
  const { lessons: lessons2 } = lessonsdata;
  console.log(lessons2);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentLesson = lessons2[currentLessonIndex];
  const currentExercise = currentLesson.exercises[currentExerciseIndex];
  const isLastLesson = currentLessonIndex === lessons2.length - 1;
  const isLastExercise = currentExerciseIndex === currentLesson.exercises.length - 1;
  const handleNext = () => {
    if (currentExercise.next_exercise_id && !isLastExercise) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
    } else if (!isLastLesson) {
      setCurrentLessonIndex((prevIndex) => prevIndex + 1);
      setCurrentExerciseIndex(0);
    } else {
      alert("You've completed all lessons and exercises!");
    }
  };
  const handlePrevious = () => {
    if (currentExercise.previous_exercise_id) {
      setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
    } else if (currentLessonIndex > 0) {
      setCurrentLessonIndex((prevIndex) => prevIndex - 1);
      setCurrentExerciseIndex(
        lessons2[currentLessonIndex - 1].exercises.length - 1
      );
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "exercise", children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: currentExercise.title }),
      currentExercise.resourcetype === "VideoExercise" ? /* @__PURE__ */ jsx(VideoExercise, { exercise: currentExercise }) : /* @__PURE__ */ jsx(QuizExercise, { exercise: currentExercise })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: currentLessonIndex === 0 && currentExerciseIndex === 0 ? "navigateRight" : "navigate",
        children: [
          (currentLessonIndex > 0 || currentExerciseIndex > 0) && /*<button className="navleft" onClick={handlePrevious}>
            &#8592;
          </button>*/
          /* @__PURE__ */ jsx("img", { src: "/icons/arrow-left.svg", className: "navLeft", onClick: handlePrevious }),
          (!isLastLesson || !isLastExercise) && /*<button className="navright" onClick={handleNext}>
            &#8594;
          </button>*/
          /* @__PURE__ */ jsx("img", { src: "/icons/arrow-right.svg", className: "navRight", onClick: handleNext })
        ]
      }
    )
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CourseLessons
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "font-sans p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl", children: "Welcome to Remix" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc mt-4 pl-6 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-blue-700 underline visited:text-purple-900",
          target: "_blank",
          href: "https://remix.run/start/quickstart",
          rel: "noreferrer",
          children: "5m Quick Start"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-blue-700 underline visited:text-purple-900",
          target: "_blank",
          href: "https://remix.run/start/tutorial",
          rel: "noreferrer",
          children: "30m Tutorial"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-blue-700 underline visited:text-purple-900",
          target: "_blank",
          href: "https://remix.run/docs",
          rel: "noreferrer",
          children: "Remix Docs"
        }
      ) })
    ] })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-UkE5_OxS.js", "imports": ["/assets/jsx-runtime-DrMmwDmt.js", "/assets/components-B1HEf7L6.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Bmu4ZXuF.js", "imports": ["/assets/jsx-runtime-DrMmwDmt.js", "/assets/components-B1HEf7L6.js"], "css": ["/assets/root-Bq5CstmY.css"] }, "routes/CourseLessons": { "id": "routes/CourseLessons", "parentId": "root", "path": "CourseLessons", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/CourseLessons-DLG1l_sJ.js", "imports": ["/assets/jsx-runtime-DrMmwDmt.js"], "css": ["/assets/CourseLessons-DiIaek2-.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Bn7UzA-z.js", "imports": ["/assets/jsx-runtime-DrMmwDmt.js"], "css": [] } }, "url": "/assets/manifest-c62b37d5.js", "version": "c62b37d5" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/CourseLessons": {
    id: "routes/CourseLessons",
    parentId: "root",
    path: "CourseLessons",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
