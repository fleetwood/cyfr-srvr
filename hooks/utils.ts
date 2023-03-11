import { __prod__ } from "../constants";

type logLevel = "DEBUG" | "INFO" | "ERROR";

const useDebug = (fileName: string, level: logLevel = "INFO") => {
  const fileMethod = (method: string) => `${fileName}.${method}`;
  const trace = (method: string, t?: any) =>
    log(`
..........................................
${fileMethod(method)} 
  ..............
${t ? JSON.stringify({ ...(t || null) }, null, 2) : ""}
..........................................
  
`);

  const log = (message?: any, ...optionalParams: any[]) => {
    if (!__prod__) {
      if (optionalParams && "string" === typeof optionalParams[0]) {
        console.log(message + " " + optionalParams);
      } else if (optionalParams && optionalParams.length > 0) {
        console.log(
          message,
          JSON.stringify(
            optionalParams.map((o) => o),
            null,
            2
          )
        );
      } else {
        console.log(message);
      }
    }
  };

  const error = (message?: any, ...optionalParams: any[]) => {
    trace(message, { error: "**************ERROR**************", optionalParams });
  }

  const debug = (method: string, data?: any) => {
    if (level === "DEBUG") {
      trace(method, { level, data });
    }
  };
  const info = (method: string, data?: any) => {
    if (level === "DEBUG" || level === "INFO") {
      trace(method, { level, data });
    }
  };

  const todo = (method: string, data?: any) => {
    if (level === "DEBUG" || level === "INFO") {
      log(`
TODO************************
${fileMethod(method)} 
****************************
${
  data
    ? // if there's data
      JSON.stringify({
          level,
          data,
      },null,2)
    : // if no data
      level
}
****************************`);
    }
  };

  return { log, error, todo, info, debug, fileMethod };
};
export default useDebug;
