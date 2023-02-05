import { VscQuote } from "react-icons/vsc";
import profileImage from "../assets/crushpic.png"
import playBtnImage from "../assets/playbtn.png"
export default function () {
    return (
        <article id="reviews__article">
            <div id="reviews__info">
                <div id="reviews__text">
                    <VscQuote id="quote__icon" />
                    <p id="reviews__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
                </div>
                <div id="reviews__profile">
                    <img src={profileImage} alt="profile picture" />
                    <div id="reviews__profile_info">
                        <big className="colorme">harry wilson</big>
                        <small>property owner</small>
                    </div>
                </div>
            </div>
            <aside id="reviews__video_placeholder">
                <img src="" alt="video placeholder" />
            </aside>
        </article>
    )
}