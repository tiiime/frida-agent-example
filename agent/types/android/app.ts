import { ActivityWrapper } from "./app/ActivityWrapper";
import { ApplicationWrapper } from "./app/ApplicationWrapper";

export let Application = Java.use("android.app.Application") as (Java.Wrapper<{}> & ApplicationWrapper);

export let Activity = Java.use("android.app.Activity") as (Java.Wrapper<{}> & ActivityWrapper);
