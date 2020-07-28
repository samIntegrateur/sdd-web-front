import { default as AddUser } from './AddUser'
import { default as ChatBubble } from './ChatBubble'
import { default as Leaf } from './Leaf'
import { default as LogIn } from './LogIn'
import { default as LogOut } from './LogOut'
import { default as PaperplaneFlying } from './PaperplaneFlying'
import { default as Paperplane } from './Paperplane'
import { default as Purse } from './Purse'
import { default as SiteDuDon } from './SiteDuDon'
import { default as Smile } from './Smile'
import { default as User } from './User'
import { SvgComponentList } from './Svg.types';
    
const SvgList: SvgComponentList = {
 AddUser: AddUser,
 ChatBubble: ChatBubble,
 Leaf: Leaf,
 LogIn: LogIn,
 LogOut: LogOut,
 PaperplaneFlying: PaperplaneFlying,
 Paperplane: Paperplane,
 Purse: Purse,
 SiteDuDon: SiteDuDon,
 Smile: Smile,
 User: User,
}

export type SvgNames = 'AddUser' | 'ChatBubble' | 'Leaf' | 'LogIn' | 'LogOut' | 'PaperplaneFlying' | 'Paperplane' | 'Purse' | 'SiteDuDon' | 'Smile' | 'User';

export default SvgList;
