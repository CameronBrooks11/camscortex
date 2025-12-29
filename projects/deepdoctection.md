- #deepdoctection-api
	- #deepdoctection.dataflow
		- #deepdoctection.dataflow.common
			- ConcatData(df_lists)
				- Bases: DataFlow
				- Concatenate several DataFlow. Produce datapoints from each DataFlow and start the next when one DataFlow is exhausted. Use this dataflow to process several .pdf in one step.
				- Example:
					- ```
					  df_1 = analyzer.analyze(path=path/to/pdf_1.pdf")
					  df_2 = analyzer.analyze(path=path/to/pdf_2.pdf")
					  df = ConcatData([df_1,df_2])
					  ```
				- Parameters:
					- Name: df_lists	
					  Type: List[DataFlow]
					  Description: a list of DataFlow.
					  Default: required
	- #deepdoctection.datapoint
		- #deepdoctection.datapoint.annotation
		  collapsed:: true
			- Annotation: Dataclass for annotations and their derived classes.
			  collapsed:: true
				- Annotation
					- Bases: ABC
					- dataclass description
					  collapsed:: true
						- Abstract base class for all types of annotations. This abstract base class only implements general methods for correctly assigning annotation_ids. It also has an active flag which is set to True. Only active annotations will be returned when querying annotations from image containers.
						- **Annotation id should never be assigned by yourself.** One possibility of assigning an id depending on an external value is to set an external id, which in turn creates an annotation id as a function of this. An annotation id can only be explicitly set, provided the value is a md5 hash.
						  collapsed:: true
							- Otherwise ids will be generated automatically if the annotation object is dumped in a parent container, either an image or annotation (e.g. sub-category).
							- If no id is supplied, the annotation id is created depending on the defining attributes (key and value pairs) as specified in the return value of get_defining_attributes.
						- active: Always set to True. You can change the value using deactivate.
						- external_id: annotation_id: Unique id for annotations. Will always be given as string representation of a md5-hash.
						  collapsed:: true
							- A string or integer value for generating an annotation id. Note, that the resulting annotation id will not depend on the defining attributes.
					- #annotation_id: str property writable
					  collapsed:: true
						- annotation_id
						-
					- #state_id: str property
					  collapsed:: true
						- Different to annotation_id this id does depend on every defined state attributes and might therefore change over time.
						- Returns: Annotation state instance
					- #get_defining_attributes(): abstractmethod
						- Defining attributes of an annotation instance are attributes, of which you think that they uniquely describe the annotation object. If you do not provide an external id, only the defining attributes will be used for generating the annotation id.
						- Returns:
							- Type:  List[str]
							- Description: A list of attributes.
						-
						-
					- #get_state_attributes(): abstractmethod, staticmethod
					  collapsed:: true
						- Similar to get_defining_attributes but for state_id
						- Returns:
							- Type: List[str]
							- Description: A list of attributes.
				- CategoryAnnotation
				  collapsed:: true
					- Bases: Annotation
					- dataclass description
					  collapsed:: true
						- A general class for storing categories (labels/classes) as well as sub categories (sub-labels/subclasses), relationships and prediction scores.
						- Sub-categories and relationships are stored in a dict, which are populated via the dum_sub_category or dump_relationship. If a key is already available as a sub-category, it must be explicitly removed using the remove_sub_category before replacing the sub-category.
						- Note that subcategories are only accepted as category annotations. Relationships, on the other hand, are only managed by passing the annotation id.
						- category_name: String will be used for selecting specific annotations. Use upper case strings.
						- category_id: When setting a value will accept strings and ints. Will be stored as string.
						- score: Score of a prediction.
						- sub_categories: Do not access the dict directly. Rather use the access get_sub_category resp. dump_sub_category.
						- relationships: Do not access the dict directly either. Use get_relationship or dump_relationship instead.
					- #category_name: ObjectTypes property writable
						- category name
					- #[[dump_relationship(key,annotation_id)]]
						- Dumps an annotation_id to a given key, in order to store relations between annotations. Note, that the referenced annotation must be stored elsewhere.
						- Parameters:
							- Name: key; annotations
							- Type: TypeOrStr; str
							- Description: The key, where to place the annotation id.; An annotation id
							- Default: required; requird;
							-