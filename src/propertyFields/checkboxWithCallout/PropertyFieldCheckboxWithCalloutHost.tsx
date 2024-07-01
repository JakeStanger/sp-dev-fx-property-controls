import * as React from 'react';

import PlaceholderWithCallout from '../../common/placeholderWithCallout/PlaceholderWithCallout';
import type { IPlaceholderWithCalloutProps } from '../../common/placeholderWithCallout/IPlaceholderWithCallout';

import { IPropertyFieldCheckboxWithCalloutHostProps } from './IPropertyFieldCheckboxWithCalloutHost';
import * as telemetry from '../../common/telemetry';
import { Checkbox } from '@fluentui/react/lib/Checkbox';

/**
 * Renders the control for PropertyFieldCheckboxWithCallout component
 */
export default class PropertyFieldCheckboxHost extends React.Component<IPropertyFieldCheckboxWithCalloutHostProps, null> {
    constructor(props: IPropertyFieldCheckboxWithCalloutHostProps) {
        super(props);

        telemetry.track('PropertyFieldCheckbox', {
          disabled: props.disabled
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <PlaceholderWithCallout {...(this.props as IPlaceholderWithCalloutProps)}>
                    <Checkbox {...this.props} label={this.props.text} />
                </PlaceholderWithCallout>
            </div>
        );
    }
}
