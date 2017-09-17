import React from 'react';

import './StyledTable.css';

const StyledTable = () => {
  return (
    <div>
      <table className='table-container'>
        <thead className='styled-thead'>
          <tr>
            <th colSpan={2}>Book</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className='styled-tbody'>
          <tr>
            <td>
              <strong className='title'>Loving Kindness</strong>
              <small className='author'>by Sharon Salzberg</small>
            </td>
            <td>In Stock</td>
            <td>1</td>
            <td>$19.98</td>
          </tr>
          <tr>
            <td>
              <strong className='title'>The Untethered Soul</strong>
              <small className='author'>by Michael A. Singer</small>
            </td>
            <td>In Stock</td>
            <td>1</td>
            <td>$22.57</td>
          </tr>
          <tr>
            <td>
              <strong className='title'>The Four Agreements</strong>
              <small className='author'>by Don Miguel Ruiz</small>
            </td>
            <td>In Stock</td>
            <td>1</td>
            <td>$25.99</td>
          </tr>
          <tr>
            <td>
              <strong className='title'>The Mastery of Love</strong>
              <small className='author'>by Don Miguel Ruiz</small>
            </td>
            <td>In Stock</td>
            <td>2</td>
            <td>$42.18</td>
          </tr>
          <tr>
            <td>
              <strong className='title'>The Alchemist</strong>
              <small className='author'>by Paulo Coelho</small>
            </td>
            <td>In Stock</td>
            <td>1</td>
            <td>$17.48</td>
          </tr>
        </tbody>
        <tfoot className='styled-tfoot'>
          <tr>
            <td colSpan={3}>Subtotal</td>
            <td>$128.20</td>
          </tr>
          <tr>
            <td colSpan={3}>Tax</td>
            <td>$8.76</td>
          </tr>
          <tr>
            <td colSpan={3}>Total</td>
            <td>$136.96</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StyledTable;