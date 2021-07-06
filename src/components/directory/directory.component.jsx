import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from './directory.selector';

import './directory.styles.scss';

const Directory = ({ sections }) => (
            <div className="directory-menu">
                {
                    // this.state.sections.map( ({title, imageUrl, id, size, linkUrl}) => (
                    //     <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} linkUrl={linkUrl}/>
                    // ))
                    sections.map( ({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);