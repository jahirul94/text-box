import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import './editor.scss';
import { ToolbarGroup, ToolbarButton, DropdownMenu } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-comments',
						isActive: true,
						onClick: () => console.log('button 1 clicked'),
					},
					{
						title: 'Button 2',
						icon: 'admin-home',
						onClick: () => console.log('button 2 clicked '),
					},
				]}
			>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon="editor-alignleft"
						onClick={() => console.log('Align Left')}
					/>
					<ToolbarButton
						title="Align Center"
						icon="editor-aligncenter"
						onClick={() => console.log('Align Center')}
					/>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						onClick={() => console.log('Align Right')}
					/>
					<DropdownMenu
						icon="arrow-down"
						label={__("More Alignments", 'text-box')}
						controls={[
							{
								title: __('Wide', 'text-box'),
								icon: 'align-wide'
							},
							{
								title: __('Full', 'text-box'),
								icon: 'align-full-width'
							}
						]}
					/>
				</ToolbarGroup>
			</BlockControls>

			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				placeholder={__('Your Text', 'text-box')}
				value={text}
				tagName="h2"
				allowedFormats={[]}
			/>
		</>
	);
}
