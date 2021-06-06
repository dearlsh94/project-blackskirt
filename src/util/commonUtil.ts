import { ITab } from "interfaces/common/ITab";

export const getTabList = () => {
  const _t1: ITab = {
    key: 't1',
    uri: 'home',
    name: 'Home'
  };
  const _t2: ITab = {
    key: 't2',
    uri: 'dummy1',
    name: 'Dummy1'
  }
  const _t3: ITab = {
    key: 't3',
    uri: 'dummy2',
    name: 'Dummy2'
  }
  const _t4: ITab = {
    key: 't4',
    uri: 'dummy3',
    name: 'Dummy3'
  }

  return [_t1, _t2, _t3, _t4];
}