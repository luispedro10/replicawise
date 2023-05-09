import React from 'react';
import './Buttons.scss';

const Buttons = () => {
  return (
    <section className="buttons-section">
      <div className="container">
        <div className="col-sm-12 p-x-2">
          <div className="row">
            <ul className="buttons-items">
              {/* Button 1 */}
              <li className="buttons-item">
              <button className="btn btn-primary">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17.143 8.57h2.571a.86.86 0 0 1 .857.857v10.286A2.579 2.579 0 0 1 18 22.284H6a2.579 2.579 0 0 1-2.572-2.571V9.427a.86.86 0 0 1 .858-.857h2.571V6.856c0-2.829 2.314-5.143 5.143-5.143 2.829 0 5.143 2.314 5.143 5.143V8.57ZM12 3.427A3.439 3.439 0 0 0 8.57 6.856V8.57h6.857V6.856A3.439 3.439 0 0 0 12 3.427Zm6 17.143a.86.86 0 0 0 .857-.857v-9.429H5.143v9.429A.86.86 0 0 0 6 20.57h12Zm-6.857-1.716v-2.83c-.515-.256-.858-.813-.858-1.456A1.72 1.72 0 0 1 12 12.854a1.72 1.72 0 0 1 1.714 1.714c0 .6-.343 1.157-.857 1.457v2.829h-1.714Z"></path>
                  </svg>
                </button>
                <p className="buttons-text">Our dedicated fraud and security <br />
                teams work to keep your money safe</p>
              </li>
              
              <li className="buttons-item">
              <button className="btn btn-primary">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M9 4.284a2.571 2.571 0 0 1 2.571-2.571h6.858A2.571 2.571 0 0 1 21 4.284v15.429a2.571 2.571 0 0 1-2.571 2.571h-6.764a2.649 2.649 0 0 1-.094.002h-6A2.571 2.571 0 0 1 3 19.715v-6.853c0-.476.386-.862.861-.862h1.282v-1.285A3.429 3.429 0 0 1 9 7.313V4.284Zm1.714 3.754A3.429 3.429 0 0 1 12 10.714V12h1.281c.476 0 .862.386.862.862v6.853c0 .3-.052.587-.146.855h4.432a.857.857 0 0 0 .857-.857V4.284a.857.857 0 0 0-.857-.857h-1.83a.857.857 0 0 1-.742 1.286h-1.714a.857.857 0 0 1-.743-1.286h-1.829a.857.857 0 0 0-.857.857v3.754Zm.911 12.532a.857.857 0 0 0 .804-.855v-6H4.714v6c0 .473.384.857.857.857h5.143v-.002h.911ZM7.36 9.502a1.714 1.714 0 0 1 2.927 1.213V12H6.857v-1.285c0-.455.18-.891.502-1.213Zm.355 6.355H9.43v2.572H7.714v-2.572Z"></path>
                  </svg>
                </button>
                <p className="buttons-text">We use 2-factor <br />
                authentication to protect your <br />
                account</p>
              </li>
              
              <li className="buttons-item">
              <button className="btn btn-primary">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12.905 2.658a1.304 1.304 0 0 0-1.373-.015L2.42 8.156a.87.87 0 0 0 .45 1.614h1.304v10.002h-1.74v1.739h19.131v-1.74h-1.739v-10h1.304V9.77a.869.869 0 0 0 .466-1.604l-8.69-5.508Zm5.23 5.373-5.933-3.76-6.216 3.76h12.149Zm-5.266 1.74h5.218v10H12.87v-10Zm-6.956 0v10h5.217v-10H5.913Z"></path>
                  </svg>
                </button>
                <p className="buttons-text">We hold your money with <br />
                established financial institutions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buttons;
