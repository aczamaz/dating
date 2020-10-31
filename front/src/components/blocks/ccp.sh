FILES_NAME=$1
COMPONENT_NAME=""

for src in ${FILES_NAME//-/ }
do
    COMPONENT_NAME+="${src^}"
done

PATH_INDEX="${FILES_NAME}/index.jsx"
PATH_COMPONENT="${FILES_NAME}/${FILES_NAME}"
PATH_COMPONENT_JS="${PATH_COMPONENT}.jsx"
PATH_STYLE="${PATH_COMPONENT}.css"

if [ -d $FILES_NAME ]
    then
        echo  -e "\e[91mcomponent exists.";
        exit 1;
fi;

mkdir $FILES_NAME
touch $PATH_INDEX
echo "import ${COMPONENT_NAME} from './${FILES_NAME}.jsx';" >> $PATH_INDEX
echo "export default ${COMPONENT_NAME};" >> $PATH_INDEX

touch $PATH_COMPONENT_JS
echo "import React from 'react';" >> $PATH_COMPONENT_JS
echo "" >> $PATH_COMPONENT_JS;
echo "import './${FILES_NAME}.css';"  >> $PATH_COMPONENT_JS;
echo ""
echo "const ${COMPONENT_NAME} = () =>" >> $PATH_COMPONENT_JS;
echo "{" >> $PATH_COMPONENT_JS;
echo "    return(" >> $PATH_COMPONENT_JS;
echo "        <div className='${FILES_NAME}'>" >> $PATH_COMPONENT_JS;
echo "        </div>" >> $PATH_COMPONENT_JS;
echo "    );" >> $PATH_COMPONENT_JS;
echo "};" >> $PATH_COMPONENT_JS;
echo "" >> $PATH_COMPONENT_JS;
echo "export default ${COMPONENT_NAME};" >> $PATH_COMPONENT_JS;

touch $PATH_STYLE

echo -e "\e[32mComponent \e[92m${COMPONENT_NAME} \e[32mcreated successfully"
