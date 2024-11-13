import React from 'react'
import './editprofilebox.css'
import { CgProfile } from "react-icons/cg";
const EditProfile = () => {
  return (
    <div className="edit-container">
      <div className="edit-top">
        <img src="" alt="" />
        <CgProfile size={75}/>
        <button>Upload</button>
      </div>
      <div className="edit-bottom">
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={formData.username}
            // onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="panNumber">PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            // value={formData.panNumber}
            // onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            // value={formData.dob}
            // onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              // checked={formData.gender === 'male'}
              // onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              // checked={formData.gender === 'female'}
              // onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              // checked={formData.gender === 'other'}
              // onChange={handleChange}
            />
            Other
          </label>
        </div>

        <div>
          <label htmlFor="facebook">Facebook:</label>
          <input
            type="url"
            id="facebook"
            name="facebook"
            // value={formData.facebook}
            // onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="twitter">Twitter:</label>
          <input
            type="url"
            id="twitter"
            name="twitter"
            // value={formData.twitter}
            // onChange={handleChange}
          />
        </div>

        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" >Cancel</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default EditProfile
