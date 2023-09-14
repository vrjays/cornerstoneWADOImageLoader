import { default as xhrRequest } from './xhrRequest.js';
import {
  xhrAbort,
  xhrAbortAll,
  addXhrRequest,
  getXhrRequest,
} from './xhrRequest.js';
import { setOptions, getOptions } from './options.js';

const internal = {
  xhrRequest,
  setOptions,
  getOptions,
  xhrAbort,
  xhrAbortAll,
  addXhrRequest,
  getXhrRequest,
};

export {
  setOptions,
  getOptions,
  xhrRequest,
  xhrAbort,
  xhrAbortAll,
  addXhrRequest,
  getXhrRequest,
  internal,
};
