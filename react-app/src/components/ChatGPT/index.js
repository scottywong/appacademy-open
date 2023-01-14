import './ChatGPT.css';
import './normal.css';

const chatPage = () => {

    
    return(
    <div className='chat-page'>
        <aside className='chat-sidemenu'>
     
            <div className='chat-sidemenu-btn'>
               <span>+</span>     New Chat
            </div>
        </aside>
            <section className='chatbox'>

                <div className='chat-log'>
               
                    <div className='chat-message chatgpt'>
                        <div className='chat-message-center'>
                            <div className='avatar'>

                            </div>
                            <div className='message'>
                                hello world
                            </div>
                        </div>
                    </div>
                    <div className='chat-message'>
                        <div className='chat-message-center'>
                            <div className='avatar'>

                            </div>
                            <div className='message'>
                                I am AI.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chat-input-holder'>
                    <textarea rows='1' type='text' placeholder='Type a message' className='chat-input'/>
                </div>

            </section>



    </div>);

}
export default chatPage;