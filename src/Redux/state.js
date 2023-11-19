const ADD_LINK = 'ADD-NEW-LINK';
const UPDATE_LINKS = 'UPDATE-NEW-LINK-TEXT';

let store=  {
_state:{

    SocialLinks:[
        {textlink:'VK',link: 'https://vk.com/tmb_command',logo: ''},
        {textlink:'Telegram',link: 'https://t.me/+lLJ7Fprt6C8xZjIy',logo: ''},
        {textlink:'Boosty',link: 'https://boosty.to/tmb_studio',logo: ''},
        {textlink:'Reddit',link: 'https://t.me/+lLJ7Fprt6C8xZjIy',logo: ''}
      ],
    NewLinkText:''
  },
getState(){
  return this._state;
},
_rerenderEntireTree(){
  console.log('state changed');
},
subscribe(observer)
{
  this._rerenderEntireTree = observer;
},

//меняют стейт
dispatch(action){
if (action.type === 'ADD-NEW-LINK'){
  let SocialLink ={
    textlink:this._state.NewLinkText,
    link: 'https://Youtube.com',
    logo: ''
  };
  this._state.SocialLinks.push(SocialLink);
  this._state.NewLinkText ='';
  this._rerenderEntireTree(this._state);
}
else if (action.type === 'UPDATE-NEW-LINK-TEXT'){
  this._state.NewLinkText = action.newText;
  this._rerenderEntireTree(this._state);
}
}
};

export const addLinkText = ()=>({type:ADD_LINK});
export const updateLinks = (text)=>(
  {type:UPDATE_LINKS, newText:text}
  );

export default store;
window.store = store;//проверка состояния в консоли