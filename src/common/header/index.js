import React from 'react';
import { connect } from 'react-redux'
import store from '../../store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style.js'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    getListArea(show) {
        if (show) {
            return (<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <div className="list">
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>)
        } else {
            return null
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav className={this.props.focused ? 'focused' : ''}>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <div className="outer">
                        <input type="text" placeholder="搜索" onFocus={(e) => { this.props.changeFocus(e) }} onBlur={(e) => { this.props.changeFocusBlur(e) }} />
                        {this.getListArea(this.props.focused)}
                    </div>
                </Nav>
                <Addition>
                    <div className="reg">注册</div>
                    <div className="writting">写文章</div>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFocus(e) {
            let action = {
                type: 'focus'
            }
            dispatch(action)
            dispatch({
                type:'init'
            })
        },
        changeFocusBlur(e) {
            let action = {
                type: 'blurs'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);