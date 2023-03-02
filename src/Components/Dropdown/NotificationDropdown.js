import React, { useState } from "react";
// import "../Card/BusinessOwnerProfileCard/OwnerProfileCard.css";
import "./NotificationDropdown.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

const NotificationDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ background: "none", border: "none" }}>
        <i className="fas fa-bell text-warning"></i>
      </DropdownToggle>

      <DropdownMenu
        right
        modifiers={{
          setMaxHeight: {
            enabled: true,
            // order: 890,
            fn: data => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "350px",
                  border: "2px solid #e9ecef"
                }
              };
            }
          }
        }}
      >
        <DropdownItem style={{ maxWidth: "600px", minWidth: "530px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />{" "}
        <DropdownItem style={{ maxWidth: "520px" }}>
          <img
            className="rounded-circle m-1 dropdown-img"
            src="./img/people.png"
          />
          <div className="m-3" style={{ display: "inline-block" }}>
            <div>
              {" "}
              <b>YourTask</b>
            </div>

            <div>UserName, 1 new task for front-end development</div>
          </div>
          <div style={{ display: "inline-block" }}>
            <div> ...</div>
            <div>1h</div>
          </div>
        </DropdownItem>
        <DropdownItem divider className="notification-divider" />
        <DropdownItem style={{ color: "#ebc010", textAlign: "center" }}>
          {" "}
          <b>See All </b>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default NotificationDropdown;
