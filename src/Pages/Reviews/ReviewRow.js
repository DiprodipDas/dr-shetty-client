import React from 'react';

const ReviewRow = ({review}) => {
    const {serviceName,email,reviewMessage}=review;
    return (
      
        <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <br/>
          <span className="badge badge-ghost badge-sm">{reviewMessage}</span>
        </td>
        <td>Purple</td>
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
      </tr>
    );
};

export default ReviewRow;