import { useEffect, useState } from "react";
import isLoggedIn from "../../utils/isLoggedIn";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    firstName,
    lastName,
    userName,
    email,
    phoneNumber,
    address,
    password,
  };

  const getUser = async () => {
    const res = await fetch("http://localhost:3000/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setUserName(data.userName);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setAddress(data.address);
    setBirthDate(data.birthDate);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="accountgui">
      <div className=" container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="test col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#account-general"
                >
                  General
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-change-password"
                >
                  Change password
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-info"
                >
                  Info
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-admin"
                >
                  Admin
                </a>
              </div>
              <a className="back" href="/">
                <div>Home</div>
              </a>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                  <div className="card-body media align-items-center">
                    <img src="images/profile.jpg" className="d-block ui-w-80" />
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input
                          type="file"
                          className="account-settings-fileinput"
                        />
                      </label>{" "}
                      &nbsp;
                      <div className="text-light small mt-1">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </div>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        className="form-control mb-1"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birth Date</label>
                      <input
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        type="text"
                        className="form-control mb-1"
                      />
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          className="form-control mb-1"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="text"
                          className="form-control mb-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-change-password">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-info">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue={"Type here your description..."}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        value={birthDate}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-admin">
                  <div className="card-body pb-2">Reservations Users Cars</div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
          &nbsp;
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
