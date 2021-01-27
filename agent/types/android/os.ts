import { BundleWrapper } from "./os/BundleWrapper";
import { LooperWrapper } from "./os/LooperWrapper";
import { MessageWrapper } from "./os/MessageWrapper";

export let Bundle = Java.use("android.os.Bundle") as (Java.Wrapper<{}> & BundleWrapper);

export let Looper = Java.use("android.os.Looper") as (Java.Wrapper<{}> & LooperWrapper);

export let Message = Java.use("android.os.Message") as (Java.Wrapper<{}> & MessageWrapper);

