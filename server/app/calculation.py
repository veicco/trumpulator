import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
import json

def get_tags(text):
    count_vect = CountVectorizer(stop_words='english')
    counts = count_vect.fit_transform([text])
    tf_transformer = TfidfTransformer(use_idf=True, sublinear_tf=True).fit(counts)
    counts_tf = tf_transformer.transform(counts)
    words_df = pd.DataFrame(counts_tf.toarray(), columns=count_vect.get_feature_names())
    
    if (float(pd.__version__[:4]) < 0.2):
        sorted_df = words_df.T.sort(columns=0, ascending=False)
    else:
        sorted_df = words_df.T.sort_values(by=0, ascending=False)
    return json.loads(sorted_df.head(6).to_json())