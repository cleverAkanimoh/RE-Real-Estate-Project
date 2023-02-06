import { VscQuote } from "react-icons/vsc";
import profileImage from "../assets/ellipse4.png";
import playBtnImage from "../assets/playbtn.png";
export default function () {
    return (
        <article id="reviews__article">
            <div className="reviews__container">
                <div className="reviews__info">
                    <div className="reviews__text">
                        <VscQuote className="colorme quote__icon" />
                        <p id="reviews__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
                    </div>
                    <div className="reviews__profile">
                        <img src={profileImage} alt="profile picture" className="profile__image" />
                        <div className="reviews__profile_info">
                            <big className="colorme">harry wilson</big>
                            <small>property owner</small>
                        </div>
                    </div>
                </div>
                <aside className="reviews__video_placeholder">
                    <img src={playBtnImage} alt="video placeholder" />
                </aside>
            </div>
        </article>
    )
}