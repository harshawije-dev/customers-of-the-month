import "./App.css";
import React, { Component } from "react";
import BaseState from "./interfaces/IBaseStates";
import EmployeeList from "./Components/employee-list/EmployeeList.component";
import SearchBar from "./Components/search-bar/SearchBar.component";

type ComponentProps = {};
type ComponentState = {
  employees: Array<BaseState>;
  searchResult: string;
};

class App extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentState) {
    super(props);

    this.state = {
      employees: [],
      searchResult: "",
    };
    this.onSearchFilter = this.onSearchFilter.bind(this);
  }

  public componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((employees) =>
        this.setState(() => {
          return { employees: employees };
        })
      )
      .catch((error) => console.log(`Error: occored ${error}`));
  }

  /**
   * onSearchFilter
   */
  public onSearchFilter(event: React.FormEvent<HTMLInputElement>): void {
    const search: string = event.currentTarget.value.toLocaleLowerCase();
    this.setState({ searchResult: search });
  }

  render(): React.ReactNode {
    // Class members destructuring
    const { employees, searchResult } = this.state;
    const { onSearchFilter } = this;

    const filtered = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchResult);
    });

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4 offset-4">
                  <SearchBar
                    onEventHandler={onSearchFilter}
                    placeholder="Search here..."
                    propStyles="form-control"
                  />
                </div>
              </div>
              <EmployeeList dataList={filtered} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
