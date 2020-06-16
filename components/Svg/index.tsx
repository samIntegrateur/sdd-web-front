import { default as SiteDuDon } from './SiteDuDon'
import { default as Test } from './Test'
import { SvgComponentList } from './Svg.types';
    
const SvgList: SvgComponentList = {
 SiteDuDon: SiteDuDon,
 Test: Test,
}

export type SvgNames = 'SiteDuDon' | 'Test';

export default SvgList;
