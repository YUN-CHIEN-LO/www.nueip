import clickoutside from "./clickoutside";

const install = function (Vue) {
  Vue.directive("clickoutside", clickoutside);
};

export default install;
