import React from 'react';
import './Banner.scss';
const Banner = () => {
  return (
    <section className="mw-banner RebrandBanner_banner__FZ_z0 grid--xl">
      <div className="container mw-banner__container">
        <p className="body mw-banner__body m-b-0">
          <span className="mw-banner__img hidden-xs hidden-sm">
            <span className="tw-icon tw-icon-insurance" aria-hidden="true" role="presentation">
              <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.664 4.286c.429 0 .814.3.857.729l.006.07c.1 1.067 1.271 13.69-9.177 17.158-.086.043-.172.043-.257.043-.086 0-.172 0-.258-.043C1.342 18.718 2.57 6 2.66 5.068l.005-.053c.043-.429.429-.729.857-.729 5.529 0 7.972-2.314 7.972-2.314a.829.829 0 0 1 1.2 0s2.528 2.314 7.971 2.314ZM12.093 20.53c3.771-1.328 6.257-4.243 7.285-8.657.565-2.339.56-4.488.558-5.662V6c-4.2-.17-6.729-1.542-7.8-2.314-1.072.772-3.6 2.143-7.8 2.315-.086 1.114-.129 3.428.471 5.871 1.029 4.371 3.471 7.286 7.286 8.657Zm-.858-13.67h1.715v4.286h4.285v1.714H12.95v4.286h-1.715V12.86H6.95v-1.714h4.285V6.86Z"></path>
              </svg>
            </span>
          </span>
          <span>
            Wise keeps your money safe.{' '}
            <a href="https://wise.com/gb/blog/how-we-work-to-keep-your-money-safe-and-available-at-wise">
              Learn how
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Banner;


