import React from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/action';
import {bindActionCreators} from 'redux';
import store from '../index';

//CONTAINER COMPONENT
class MenuItemList extends React.Component {

    createMenuItems(){
        return this.props.items.map((item) => {
            if(store){
                if(store.getState().menuReducer.id === item.id){
                    return <li className='menu__item menu__item--selected' key={item.id} onClick={() => this.props.selectItem(item)}>{item.itemName}</li>
                }else {
                    return <li className='menu__item' key={item.id} onClick={() => this.props.selectItem(item)}>{item.itemName}</li>
                } 
            }
            return <li className='menu__item' key={item.id} onClick={() => this.props.selectItem(item)}>{item.itemName}</li>
        })
    }

    render(){
        return (
             <ul className='menu__items'>
                 {this.createMenuItems()}
            </ul>
        )
    }

}

//FUNCTION FROM REACT-REDUX
function mapStateToProps(state){
    return {
        items: state.menuDataReducer
    }
}

//FUNCTION FROM REACT-REDUX 
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectItem: selectItem}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuItemList);