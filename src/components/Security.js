import React from 'react';
import './Security.scss';

const Security = () => {
  return (
    <section className="security-section">
      <div className="container">
        <div className="col-sm-12 p-x-2">
          <hr className="divider m-b-5 m-t-0" />
          <div className="row">
            <ul className="security-items">
              <li className="security-item">
                <div className="icon-wrapper">
                <span className="tw-icon tw-icon-padlock security-icon" aria-hidden="true" role="presentation">
                    <svg width="32" height="32" fill="#454745" focusable="false" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.143 8.57h2.571a.86.86 0 0 1 .857.857v10.286A2.579 2.579 0 0 1 18 22.284H6a2.579 2.579 0 0 1-2.572-2.571V9.427a.86.86 0 0 1 .858-.857h2.571V6.856c0-2.829 2.314-5.143 5.143-5.143 2.829 0 5.143 2.314 5.143 5.143V8.57ZM12 3.427A3.439 3.439 0 0 0 8.57 6.856V8.57h6.857V6.856A3.439 3.439 0 0 0 12 3.427Zm6 17.143a.86.86 0 0 0 .857-.857v-9.429H5.143v9.429A.86.86 0 0 0 6 20.57h12Zm-6.857-1.716v-2.83c-.515-.256-.858-.813-.858-1.456A1.72 1.72 0 0 1 12 12.854a1.72 1.72 0 0 1 1.714 1.714c0 .6-.343 1.157-.857 1.457v2.829h-1.714Z"></path>
                    </svg>
                    </span>
                </div>
                <p className="security-text">We're regulated by the National Bank of<br /> Belgium</p>
              </li>
              <li className="security-item">
                <div className="icon-wrapper">
                  <span className="tw-icon tw-icon-keep security-icon" aria-hidden="true" role="presentation">
                  <svg width="32" height="32" fill="#454745" focusable="false" viewBox="0 0 24 24">
                  <path d="M21.429 11.143h-9.515C11.486 8.7 9.386 6.857 6.857 6.857 4.03 6.857 1.714 9.172 1.714 12c0 2.829 2.315 5.143 5.143 5.143 2.529 0 4.672-1.843 5.057-4.286h5.229v3.429h1.714v-3.429h1.715v3.429h1.714V12a.86.86 0 0 0-.857-.857ZM6.857 15.43A3.439 3.439 0 0 1 3.43 12a3.439 3.439 0 0 1 3.428-3.428A3.439 3.439 0 0 1 10.286 12a3.439 3.439 0 0 1-3.429 3.429Z"></path>
                      </svg>
                  </span>
                </div>
                <p className="security-text">
                    We protect your details through
                <span className="underline-word" href="https://wise.com/gb/about/security"> strict</span>
                <br />
                <a className="underline-link" href="https://wise.com/gb/about/security"> standards</a>
                    </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;