import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tab extends Component {
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {
        },
    };

    constructor(props) {
        super(props);

        const currProps = this.props;

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            preIndex: activeIndex,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex,
            })
        }
    }

    handleTabClick = (activeIndex) => {
        const preIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                preIndex,
            });
        }

        this.props.onChange({activeIndex, preIndex});
    };

    renderTabNav() {
        const {classPrefix, children} = this.props;

        return (
            <TabNav
                key='tabBar'
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    renderTabContent() {
        const {classPrefix, children} = this.props;
        return (
            <TabContent
                key='tabContent'
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    render() {
        const {className} = this.props;

        const classes = classnames(className, 'ui-Tabs');

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>

        )
    }
}

export default Tab;