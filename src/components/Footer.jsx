import data from "../constants/data"

export default function Footer(){
    return (
        <footer className="w-full pt-20 bg-midnight flex justify-center">
            <div className="w-960 h-[100px] mx-4">
                <div className="w-full h-0.5 bg-slate-500">
                </div>
                <div className="pt-6 flex items-center justify-between">
                    <span className="text-slate-300 text-lg font-semibold">{data.name}</span>
                    <div className="flex items-center gap-3">
                        <a 
                            href={data.socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 25 25" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 18.025 3.5875 22.7125 8.55 24.375C9.175 24.475 9.375 24.0875 9.375 23.75V21.6375C5.9125 22.3875 5.175 19.9625 5.175 19.9625C4.6 18.5125 3.7875 18.125 3.7875 18.125C2.65 17.35 3.875 17.375 3.875 17.375C5.125 17.4625 5.7875 18.6625 5.7875 18.6625C6.875 20.5625 8.7125 20 9.425 19.7C9.5375 18.8875 9.8625 18.3375 10.2125 18.025C7.4375 17.7125 4.525 16.6375 4.525 11.875C4.525 10.4875 5 9.375 5.8125 8.4875C5.6875 8.175 5.25 6.875 5.9375 5.1875C5.9375 5.1875 6.9875 4.85 9.375 6.4625C10.3625 6.1875 11.4375 6.05 12.5 6.05C13.5625 6.05 14.6375 6.1875 15.625 6.4625C18.0125 4.85 19.0625 5.1875 19.0625 5.1875C19.75 6.875 19.3125 8.175 19.1875 8.4875C20 9.375 20.475 10.4875 20.475 11.875C20.475 16.65 17.55 17.7 14.7625 18.0125C15.2125 18.4 15.625 19.1625 15.625 20.325V23.75C15.625 24.0875 15.825 24.4875 16.4625 24.375C21.425 22.7 25 18.025 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0Z" fill="#CBD5E1"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg 
                                width="28" 
                                height="28" 
                                viewBox="0 0 30 30" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z" fill="#CBD5E1"/>
                            </svg>
                        </a>
                        <a href="">
                            <svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 30 30" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2847 2.50129C17.1969 2.49779 18.1091 2.50696 19.021 2.52879L19.2635 2.53754C19.5435 2.54754 19.8197 2.56004 20.1535 2.57504C21.4835 2.63754 22.391 2.84754 23.1872 3.15629C24.0122 3.47379 24.7072 3.90379 25.4022 4.59879C26.0377 5.2233 26.5295 5.97873 26.8435 6.81254C27.1522 7.60879 27.3622 8.51754 27.4247 9.84754C27.4397 10.18 27.4522 10.4575 27.4622 10.7375L27.4697 10.98C27.492 11.8915 27.5015 12.8033 27.4985 13.715L27.4997 14.6475V16.285C27.5028 17.1972 27.4932 18.1094 27.471 19.0213L27.4635 19.2638C27.4535 19.5438 27.441 19.82 27.426 20.1538C27.3635 21.4838 27.151 22.3913 26.8435 23.1875C26.5306 24.0222 26.0386 24.7783 25.4022 25.4025C24.7772 26.0379 24.0214 26.5297 23.1872 26.8438C22.391 27.1525 21.4835 27.3625 20.1535 27.425C19.8197 27.44 19.5435 27.4525 19.2635 27.4625L19.021 27.47C18.1091 27.4923 17.1969 27.5019 16.2847 27.4988L15.3522 27.5H13.716C12.8038 27.5031 11.8917 27.4935 10.9797 27.4713L10.7372 27.4638C10.4405 27.453 10.1438 27.4405 9.84724 27.4263C8.51724 27.3638 7.60974 27.1513 6.81224 26.8438C5.9781 26.5305 5.22254 26.0386 4.59849 25.4025C3.9623 24.7779 3.47002 24.022 3.15599 23.1875C2.84724 22.3913 2.63724 21.4838 2.57474 20.1538C2.56082 19.8572 2.54832 19.5605 2.53724 19.2638L2.53099 19.0213C2.50795 18.1094 2.49753 17.1972 2.49974 16.285V13.715C2.49626 12.8033 2.50542 11.8915 2.52724 10.98L2.53599 10.7375C2.54599 10.4575 2.55849 10.18 2.57349 9.84754C2.63599 8.51629 2.84599 7.61004 3.15474 6.81254C3.46896 5.97832 3.9622 5.2231 4.59974 4.60004C5.22336 3.96348 5.97845 3.47076 6.81224 3.15629C7.60974 2.84754 8.51599 2.63754 9.84724 2.57504L10.7372 2.53754L10.9797 2.53129C11.8912 2.50826 12.803 2.49784 13.7147 2.50004L16.2847 2.50129ZM14.9997 8.75129C14.1716 8.73958 13.3494 8.89257 12.581 9.20138C11.8125 9.51018 11.1131 9.96864 10.5233 10.5501C9.93355 11.1316 9.46525 11.8245 9.1456 12.5885C8.82596 13.3525 8.66136 14.1725 8.66136 15.0007C8.66136 15.8289 8.82596 16.6488 9.1456 17.4128C9.46525 18.1769 9.93355 18.8698 10.5233 19.4512C11.1131 20.0327 11.8125 20.4912 12.581 20.8C13.3494 21.1088 14.1716 21.2618 14.9997 21.25C16.6573 21.25 18.2471 20.5916 19.4192 19.4195C20.5913 18.2474 21.2497 16.6576 21.2497 15C21.2497 13.3424 20.5913 11.7527 19.4192 10.5806C18.2471 9.40852 16.6573 8.75129 14.9997 8.75129ZM14.9997 11.2513C15.4979 11.2421 15.9928 11.3323 16.4557 11.5166C16.9186 11.7008 17.3402 11.9755 17.6957 12.3245C18.0513 12.6735 18.3337 13.0898 18.5265 13.5492C18.7194 14.0086 18.8187 14.5018 18.8188 15C18.8189 15.4983 18.7197 15.9915 18.527 16.4509C18.3344 16.9104 18.052 17.3268 17.6966 17.676C17.3412 18.0251 16.9197 18.2999 16.4569 18.4843C15.9941 18.6687 15.4991 18.7591 15.001 18.75C14.0064 18.75 13.0526 18.355 12.3493 17.6517C11.6461 16.9484 11.251 15.9946 11.251 15C11.251 14.0055 11.6461 13.0517 12.3493 12.3484C13.0526 11.6451 14.0064 11.25 15.001 11.25L14.9997 11.2513ZM21.5622 6.87629C21.159 6.89243 20.7776 7.06398 20.498 7.35501C20.2184 7.64603 20.0622 8.03396 20.0622 8.43754C20.0622 8.84113 20.2184 9.22905 20.498 9.52008C20.7776 9.81111 21.159 9.98265 21.5622 9.99879C21.9766 9.99879 22.3741 9.83417 22.6671 9.54115C22.9601 9.24812 23.1247 8.85069 23.1247 8.43629C23.1247 8.02189 22.9601 7.62447 22.6671 7.33144C22.3741 7.03841 21.9766 6.87379 21.5622 6.87379V6.87629Z" fill="#CBD5E1"/>
                            </svg>
                        </a>
                        <a 
                            href={data.socialLinks.facebook} 
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 30 30" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z" fill="#CBD5E1"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}