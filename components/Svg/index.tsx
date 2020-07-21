import { default as AddUser } from './AddUser'
import { default as ChatBubble } from './ChatBubble'
import { default as LogIn } from './LogIn'
import { default as LogOut } from './LogOut'
import { default as SiteDuDon } from './SiteDuDon'
import { default as Test } from './Test'
import { default as User } from './User'
import { SvgComponentList } from './Svg.types';
    
const SvgList: SvgComponentList = {
 AddUser: AddUser,
 ChatBubble: ChatBubble,
 LogIn: LogIn,
 LogOut: LogOut,
 SiteDuDon: SiteDuDon,
 Test: Test,
 User: User,
}

export type SvgNames = 'AddUser' | 'ChatBubble' | 'LogIn' | 'LogOut' | 'SiteDuDon' | 'Test' | 'User';

export default SvgList;
