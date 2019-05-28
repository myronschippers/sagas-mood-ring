import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// MATERIAL-UI components
import Typography from '@material-ui/core/Typography';

class StatsPage extends Component {
    render() {
        return (
            <div>
                <div className="vr vr_x3">
                    <Typography
                        variant="h3"
                        component="h2"
                    >
                        Image Stats
                    </Typography>
                </div>

                <div>
                    <div className="vr vr_x2">
                        <Typography
                            variant="h4"
                            component="h3"
                        >
                            Image Breakdown by Tag
                        </Typography>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(StatsPage);
