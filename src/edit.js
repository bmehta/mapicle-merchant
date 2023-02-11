/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const [ isCPick, setIsCPick ] = useState(false);

	return (
		<>
			<div { ...blockProps }>
				<span>Merchant Name</span>
				<span>
					<TextControl
						value={ attributes.name }
						onChange={ ( val ) => setAttributes( { name: val } ) }
					/>
				</span>
			</div>
			<div>
				<span>Merchant Address 123</span>
				<span>
					<TextControl
						value={ attributes.address }
						onChange={ ( val ) => setAttributes( { address: val } ) }
					/>
				</span>
			</div>
			{ attributes.address &&
				<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.049832100749!2d-72.3890260841821!3d41.35127057926758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e63cda509f4c1b%3A0xc3c41df3b35f3978!2s36%20Main%20St%2C%20Essex%2C%20CT%2006426!5e0!3m2!1sen!2sus!4v1676058729088!5m2!1sen!2sus" width="500" height="200"/>
				</div>
			}
			<div>
				<ToggleControl
					label="Curator Pick"
					checked= { isCPick }
					onChange={() => { setIsCPick((state) => !state); }}
				/>
			</div>
		</>
	);
}
