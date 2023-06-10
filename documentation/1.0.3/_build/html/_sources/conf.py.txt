# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

import sys
import os
print(os.path.abspath('../py_vollib'))
sys.path.insert(0, os.path.abspath('../py_vollib'))




import sphinx_rtd_theme
from recommonmark.parser import CommonMarkParser

project = 'py_vollib'
copyright = '2023, Larry Richards'
author = 'Larry Richards'
release = '1.0.3'

extensions = [
    'autoapi.extension',
    'sphinx.ext.autodoc',
    'sphinx.ext.doctest',
    'sphinx.ext.coverage',
    'sphinx.ext.imgmath',
    'sphinx.ext.ifconfig',
    'sphinx.ext.viewcode',
    "sphinxcontrib.jquery"
    ]

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration




exclude_patterns = ['**/ref_python/**', 'py_vollib/helpers/**']
source_parsers     = {'.md': CommonMarkParser}
source_suffix      = ['.rst', '.md', '.py']
master_doc         = 'index'
language           = 'en'
exclude_patterns   = ['_build', 'Thumbs.db', '.DS_Store']
add_module_names   = False
pygments_style     = 'sphinx'
todo_include_todos = False
html_theme         = "sphinx_rtd_theme"
html_logo = "_static/vollib-logo.svg"
html_favicon = "_static/favicon.ico"
html_theme_path    = [sphinx_rtd_theme.get_html_theme_path()]
pygments_style = 'sphinx'

modindex_common_prefix = ['py_vollib.']
add_module_names = False




# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

autoapi_dirs = ['../py_vollib']

# The following is how github pages documentation is configured
html_static_path = ['/documentation/1.0.3/_static']





