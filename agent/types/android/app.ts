import { ApplicationWrapper } from "./app/ApplicationWrapper";

export let Application = Java.use("android.app.Application") as (Java.Wrapper<{}> & ApplicationWrapper);
