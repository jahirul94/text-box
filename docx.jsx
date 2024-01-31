<>
	// Rich text
	<RichText
		{ ...useBlockProps( {
			className: `text-box-align-${ alignment }`,
			style: {
				backgroundColor,
				color: textColor,
			},
		} ) }
		onChange={ ( value ) => onChangeText( value ) }
		placeholder={ __( 'Your Text', 'text-box' ) }
		value={ text }
		tagName="h2"
		allowedFormats={ [] }
	></RichText>
	// inspector and color settings
	<InspectorControls>
		<PanelColorSettings
			title={ __( 'Color Settings', 'text-box' ) }
			icon="admin-appearance"
			initialOpen
			disableCustomColors={ false }
			colorSettings={ [
				{
					value: backgroundColor,
					onChange: onBackgroundColorChange,
					label: __( 'Background Color', 'text-box' ),
				},
				{
					value: textColor,
					onChange: onTextColorChange,
					label: __( 'Text Color', 'text-box' ),
				},
			] }
		>
			<ContrastChecker
				textColor={ textColor }
				backgroundColor={ backgroundColor }
			/>
		</PanelColorSettings>
	</InspectorControls>
</>;
