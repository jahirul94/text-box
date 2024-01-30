import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar
} from '@wordpress/block-editor';
import './editor.scss';
// import { ToolbarGroup, ToolbarButton, DropdownMenu } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	}
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	}

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					onChange={(value) => onChangeAlignment(value)}
					value={alignment}
				/>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className:`text-box-align-${alignment}`
				})}
				onChange={(value) => onChangeText(value)}
				placeholder={__('Your Text', 'text-box')}
				value={text}
				tagName="h2"
				allowedFormats={[]}
			/>
		</>
	);
}
