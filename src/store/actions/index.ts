import * as AuthActionCreators from "./authActions";
import * as ModalActionCreators from "./modalActions";
import * as OrderActionCreators from "./orderActions";

export default {
  ...AuthActionCreators,
  ...ModalActionCreators,
  ...OrderActionCreators,
};
