import React, { Component } from 'react';

class Cpt_List extends Component {
    render() {
        return (
            <table className="table table-bordered table-inverse">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>MÃ</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
              </thead>
              <tbody>
                {this.props.children}
              </tbody>
          </table>
        );
    }
}

export default Cpt_List;