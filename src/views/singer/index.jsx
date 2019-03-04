import React, { Component } from 'react';
import { ajax } from '@/utils';
import { NavLink } from 'react-router-dom';
import '@/assets/scss/singer.scss';

const ClassListNav = (props) => {
  return (
    <ul className="singer-class-list">
      {
        props.classList.map(item => 
          <li key={item.classid}>
            <NavLink
              // to={'/singer/list/'+item.classid+''}>
              to={{
                pathname: `/nsinger/list/${item.classid}`,
                title: item.classname
              }}>
              <i className="singer-list-arrow"></i>
              {item.classname}
            </NavLink>
          </li>
        )
      }
    </ul>
  );
}

class SingerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: []
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/km/singer/class');
    const data = response.data;
    let classList = data.list;
    let newClassList = [];
    // 处理第一个值
    newClassList.push([classList[0]]);
    classList.splice(0, 1);
    // 向上取整
    const len = classList.length;
    const time = Math.ceil(classList.length / 3);
    for (let i = 0; i < time; i++) {
      let tempArr = [];
      let index = i * 3;
      for (let j = 0; j < 3; j++) {
        if (index + j < len) {
          tempArr.push(classList[index + j]);
        }
      }
      newClassList.push(tempArr);
    }
    this.setState({
      classList: [...newClassList]
    });
  }

  render() {
    
    return (
      <div className="singer-class-list-wrapper">
        {
          this.state.classList.map((item, index) => 
            <ClassListNav
              key={index}
              classList={item} />
          )
        }
      </div>
    );
  }
}

export default SingerClass;
