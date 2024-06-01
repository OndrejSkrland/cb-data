import { applyMixins } from "../utils/mixins";
import {Planets} from "./v1/planets";

class ApiInstance {}

interface ApiInstance extends Planets {}

applyMixins(ApiInstance, [Planets]);
export const Api = new ApiInstance();
