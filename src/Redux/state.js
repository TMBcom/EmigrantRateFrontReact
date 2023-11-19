import LinksReducer from "./Links-reducer";


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
  this._state = LinksReducer(this._state, action);
  this._rerenderEntireTree(this._state);
}
};
export default store;
window.store = store;//проверка состояния в консоли