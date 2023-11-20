const ADD_LINK = 'ADD-NEW-LINK';
const UPDATE_LINKS = 'UPDATE-NEW-LINK-TEXT';

let initialState = {
    SocialLinks:[
        {textlink:'VK',link: 'https://vk.com/tmb_command',logo: ''},
        {textlink:'Telegram',link: 'https://t.me/+lLJ7Fprt6C8xZjIy',logo: ''},
        {textlink:'Boosty',link: 'https://boosty.to/tmb_studio',logo: ''},
        {textlink:'Reddit',link: 'https://t.me/+lLJ7Fprt6C8xZjIy',logo: ''}
      ],
    NewLinkText:''
};

const LinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LINK:
            let SocialLink ={
                textlink:state.NewLinkText,
                link: 'https://Youtube.com',
                logo: ''
              };
              state.SocialLinks.push(SocialLink);
              state.NewLinkText ='';
              return state;
        case UPDATE_LINKS:
            state.NewLinkText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addLinkText = ()=>({type:ADD_LINK});
export const updateLinks = (text)=>(
  {type:UPDATE_LINKS, newText:text}
  );


export default LinksReducer;