import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.sass";
import CONSTANTS from "../../constants";
import {
  getUserAction,
  clearUserStore,
  headerRequest,
} from "../../actions/actionCreator";

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

  logOut = () => {
    localStorage.clear();
    this.props.clearUserStore();
    this.props.history.replace("/login");
  };

  startContests = () => {
    this.props.history.push("/startContest");
  };

  renderLoginButtons = () => {
    if (this.props.data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                this.props.data.avatar === "anon.png"
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${this.props.data.avatar}`
              }
              alt="user"
            />
            <span>{`Hi, ${this.props.data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt="menu"
            />
            <ul>
              <li>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <span>View Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <span>My Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Affiliate Dashboard</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span onClick={this.logOut}>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt="email"
          />
        </>
      );
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span className={styles.btn}>LOGIN</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <span className={styles.btn}>SIGN UP</span>
        </Link>
      </>
    );
  };

  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc
            Magazine.
          </span>
          <a href="http://www.google.com">Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <a href="tel:+8773553585" className={styles.numberPhone}>
              (877)&nbsp;355-3585
            </a>
          </div>
          <div className={styles.userButtonsContainer}>
            {this.renderLoginButtons()}
          </div>
        </div>
        <div className={styles.navContainer}>
          <a href="/">
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
              className={styles.logo}
              alt="blue_logo"
            />
          </a>
          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <ul>
                <li>
                  <span>NAME IDEAS</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <ul>
                    <a href="http://www.google.com" className={styles.linlLi}>
                      <li>Beauty</li>
                    </a>
                    <a href="http://www.google.com" className={styles.linlLi}>
                      <li>Consulting</li>
                    </a>
                    <a href="http://www.google.com" className={styles.linlLi}>
                      <li>E-Commerce</li>
                    </a>
                    <a href="http://www.google.com" className={styles.linlLi}>
                      <li>Fashion & Clothing</li>
                    </a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>Finance</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>Real Estate</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>Tech</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li className={styles.last}>More Categories</li></a>
                  </ul>
                </li>
                <li>
                  <span>CONTESTS</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <ul>
                    <a href="http://www.google.com" className={styles.linlLi}><li>HOW IT WORKS</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>PRICING</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>AGENCY SERVICE</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>ACTIVE CONTESTS</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>WINNERS</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>LEADERBOARD</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li className={styles.last}>BECOME A CREATIVE</li></a>
                  </ul>
                </li>
                <li>
                  <span>Our Work</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <ul>
                    <a href="http://www.google.com" className={styles.linlLi}><li>NAMES</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>TAGLINES</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>LOGOS</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li className={styles.last}>TESTIMONIALS</li></a>
                  </ul>
                </li>
                <li>
                  <span>Names For Sale</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <ul>
                    <a href="http://www.google.com" className={styles.linlLi}><li>POPULAR NAMES</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>SHORT NAMES</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>INTRIGUING NAMES</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>NAMES BY CATEGORY</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>VISUAL NAME SEARCH</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li className={styles.last}>SELL YOUR DOMAINS</li></a>
                  </ul>
                </li>
                <li>
                  <span>Blog</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <ul>
                    <a href="http://www.google.com" className={styles.linlLi}><li>ULTIMATE NAMING GUIDE</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>POETIC DEVICES IN BUSINESS NAMING</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li>CROWDED BAR THEORY</li></a>
                    <a href="http://www.google.com" className={styles.linlLi}><li className={styles.last}>ALL ARTICLES</li></a>
                  </ul>
                </li>
              </ul>
            </div>
            {this.props.data && this.props.data.role !== CONSTANTS.CREATOR && (
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
