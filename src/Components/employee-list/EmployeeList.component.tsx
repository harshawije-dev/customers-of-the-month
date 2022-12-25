import { Component, ReactNode } from "react";
import BaseState from "../../interfaces/IBaseStates";
import "./EmployeeList.style.css";

type ComponenetProps = {
  dataList: Array<BaseState>;
  optional?: any;
};
type ComponenetState = {};

class EmployeeList extends Component<ComponenetProps, ComponenetState> {
  constructor(props: ComponenetProps, state: ComponenetState) {
    super(props);
  }
  render(): ReactNode {
    const { dataList } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              {dataList.map((employee) => {
                const { id, name, email, username } = employee;

                return (
                  <div className="col-sm-3 my-3" key={id}>
                    <div className="card card-transition">
                      <div className="card-body">
                        <img
                          src={`https://robohash.org/${id}/?set=set1&size=200x200`}
                          alt={name}
                        />
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{username}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeeList;
