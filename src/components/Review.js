import React from 'react';
import '../css/review.css';

function Review() {
  return (
    <section className='review' id='reviews'>
      <div className='review-content'>
        <h1 className='green'>Why Okanemo?</h1>
        <input type='radio' name='slides' id='radio-1'></input>
        <input type='radio' name='slides' id='radio-2'></input>
        <input type='radio' name='slides' id='radio-3'></input>
        <input type='radio' name='slides' id='radio-4'></input>
        <ul className='reviews'>
          <li className='user-review'>
            <img
              src='https://transferwise.com/staticrab/homepage/_next/static/images/ejiro-275a884b244bfd2053ac4ec465b292ad.jpg'
              alt='Ejiro'
            />
            <div className='user-review-text'>
              With Okanemo it's just so{' '}
              <span className='green'>easy and effortless</span>.
              <p>Ejiro, Toronto, Canada</p>
            </div>
          </li>
          <li className='user-review'>
            <img
              src='https://transferwise.com/staticrab/homepage/_next/static/images/lucyYak-14c19d066aee02f54230bfc017a2521f.jpg'
              alt='Lucy and Yak'
            />
            <div className='user-review-text'>
              Using Okanemo for international payments just
              <span className='green'> makes life really easy</span>.
              <p>Lucy and Yak, Brighton, UK</p>
            </div>
          </li>
          <li className='user-review'>
            <img
              src='https://transferwise.com/staticrab/homepage/_next/static/images/mathew-a442d7f6e3e460bba32287246d559c53.jpg'
              alt='Mathew'
            />
            <div className='user-review-text'>
              I use Okanemo to send money back to my bank account. Using Okanemo
              is{' '}
              <span className='green'>easy, efficient, and transparent.</span>{' '}
              It's that simple.<p>Mathew, Würzburg, Germany</p>
            </div>
          </li>
          <li className='user-review'>
            <img
              src='https://transferwise.com/staticrab/homepage/_next/static/images/sophie-ccda413f0d713f5d7330c0e6146fdc69.jpg'
              alt='Sophie'
            />
            <div className='user-review-text'>
              I’ve probably saved two or three millions of rupiahs, and I’ll
              <span className='green'> continue to save</span> as I continue to
              use it.
              <p>Sophie, Sydney, Australia</p>
            </div>
          </li>
        </ul>
        <div class='slidesNavigation'>
          <label for='radio-1' id='dotForRadio-1'></label>
          <label for='radio-2' id='dotForRadio-2'></label>
          <label for='radio-3' id='dotForRadio-3'></label>
          <label for='radio-4' id='dotForRadio-4'></label>
        </div>
      </div>
    </section>
  );
}

export default Review;
