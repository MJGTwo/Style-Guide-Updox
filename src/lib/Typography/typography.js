import React from 'react';
import s from './typography.css';
import cx from 'classnames';

export default function  Typography(props) {


  return(
    <div className={cx(s.table)}>
      <div className = {cx(s.row)}>
        <h1>
          <div className={cx(s.col1)}> h1. Bold Main Heading</div>
          <div className={cx(s.col2)}> 36px</div>
          <div className={cx(s.col3)}> Bold</div>
        </h1>
      </div><div className = {cx(s.row)}>
        <h2>
          <div className={cx(s.col1)}> h2. Main Heading</div>
          <div className={cx(s.col2)}> 36px</div>
          <div className={cx(s.col3)}> Regular</div>
        </h2>
      </div><div className = {cx(s.row)}>
        <h3>
          <div className={cx(s.col1)}> h3. Section Heading</div>
          <div className={cx(s.col2)}> 24px </div>
          <div className={cx(s.col3)}> Regular</div>
        </h3>
      </div><div className = {cx(s.row)}>
        <h4>
          <div className={cx(s.col1)}> h4. Bold Section Heading</div>
          <div className={cx(s.col2)}> 24px </div>
          <div className={cx(s.col3)}> Bold</div>
        </h4>
      </div><div className = {cx(s.row)}>
        <h5>
          <div className={cx(s.col1)}> h5. Sub Section Heading</div>
          <div className={cx(s.col2)}> 18px </div>
          <div className={cx(s.col3)}> Regular</div>
        </h5>
      </div><div className = {cx(s.row)}>
        <h6>
          <div className={cx(s.col1)}> h6. Bold Sub Section Heading</div>
          <div className={cx(s.col2)}> 18px </div>
          <div className={cx(s.col3)}> Bold</div>
        </h6>
      </div><div className = {cx(s.row)}>

          <div className={cx(s.col1)}> <p>p1. Body Content</p></div>
          <div className={cx(s.col2)}> <p>14px </p></div>
          <div className={cx(s.col3)}> <p>Regular</p></div>

      </div><div className = {cx(s.row)}>


            <div className={cx(s.col1)}> <p><strong>p2. Bold Body Content</strong></p></div>
            <div className={cx(s.col2)}> <p><strong>14px </strong></p></div>
            <div className={cx(s.col3)}> <p><strong>Bold</strong></p></div>


      </div>
    </div>
  )
}
