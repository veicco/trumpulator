import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
import json

def get_tags(text):
    count_vect = CountVectorizer()
    counts = count_vect.fit_transform([text])
    tf_transformer = TfidfTransformer(use_idf=True, sublinear_tf=True).fit(counts)
    counts_tf = tf_transformer.transform(counts)
    words_df = pd.DataFrame(counts_tf.toarray(), columns=count_vect.get_feature_names())
    sorted_df = words_df.T.sort(columns=0, ascending=False)
    return json.loads(sorted_df.head(20).to_json())