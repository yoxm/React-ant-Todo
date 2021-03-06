import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

class TabContent extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
    };

    getTabPanels() {
        const { classPrefix, activeIndex, panels} = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) return ;
            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;

            return React.cloneElement(child, {
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpanel-${order}`,
            });
        });
    }

    render() {
        const { classPrefix } = this.props;
        const classes = className({
            [`${classPrefix}-content`]: true,
        });

        return (
            <div className={classes}>
                {this.getTabPanels()}
            </div>
        )
    }
}

export default TabContent;